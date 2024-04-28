import { type FC, useState } from "react";
import * as S from "./styled";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@components/Form/components/Input";
import { Button } from "@components/Button";
import axios from "axios";
import { FadeIn } from "@utils/animations/FadeIn";

/**
 * just for example Newsletter form is setup with
 * @url https://emailjs.com
 */
export const Newsletter: FC = () => {
    const [emailSend, setEmailSend] = useState(false);

    /**
     * Zod schema for form validation
     */
    const schema = z.object({
        email: z.string().email({
            message: "Please enter a valid email",
        }),
    });

    /**
     * React hook form setup
     */
    const newsletterForm = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            email: "",
        },
    });

    /**
     * Submit form function
     * @param {Object} values - form values
     * @returns {Promise<void>}
     * just for example Newsletter form is setup with
     * @url https://emailjs.com
     * you can use any other service or setup your own
     *
     * when you setup your own service
     * remember to store somewhere else data like api keys  to be more secure
     */
    const formSubmit = newsletterForm.handleSubmit(async (values) => {
        axios
            .post("https://api.emailjs.com/api/v1.0/email/send", {
                service_id: "service_YOUR_SERVICE_ID",
                template_id: "template_YOUR_TEMPLATE_ID",
                user_id: "YOUR_USER_ID",
                template_params: {
                    email: values.email,
                },
            })
            .then((res) => {
                if (res.status === 200) {
                    setEmailSend(true);
                }
            });
    });

    return (
        <S.NewsletterStyled>
            {!emailSend ? (
                <FadeIn>
                    <S.NewsletterFormStyled onSubmit={formSubmit}>
                        <h2>
                            Subscribe to our newsletter <b>to get:</b>
                        </h2>
                        <p>
                            change API links to your own service to make it work
                            (whole script is setup correctly just change API
                            links)
                        </p>
                        <S.NewsletterFormWrapper>
                            <Input
                                type="email"
                                placeholder="Email *"
                                register={newsletterForm.register("email")}
                                error={
                                    newsletterForm.formState.errors.email
                                        ?.message
                                }
                            />
                            <Button
                                asButton={true}
                                variant="secondary"
                                type="submit"
                            >
                                Subscribe
                            </Button>
                        </S.NewsletterFormWrapper>
                    </S.NewsletterFormStyled>
                </FadeIn>
            ) : (
                <S.NewsletterThankYou>
                    Thank you for your message! I will get back to you as soon
                    as possible
                </S.NewsletterThankYou>
            )}
        </S.NewsletterStyled>
    );
};
