import emailjs from "@emailjs/browser";
import type { ContactFormProps } from "@website/ui";
import { toast } from "react-toastify";

export const onContactSubmit: ContactFormProps["onSubmit"] = async (values, helpers) => {
	const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
	const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
	const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

	let error = false;
	await toast
		.promise(emailjs.send(serviceId, templateId, values, publicKey), {
			pending: "Sending carrier pigeon to the correct destination...",
			error: "The carrier pigeon went to the wrong location",
			success: "The carrier pigeon reached the correct destination!"
		})
		.catch((err) => {
			console.error("[CONTACT FORM ERROR]: ", err);
			error = true;
		});

	if (!error) helpers.resetForm();
};
