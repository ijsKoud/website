import { PrimaryButton } from "@website/buttons";
import { Form, Formik, type FormikHelpers } from "formik";
import React from "react";
import { object, string } from "yup";

export interface GuestbookTextAreaProps {
	onSubmit: (values: { message: string }, helpers: FormikHelpers<{ message: string }>) => void;
}

export const GuestbookTextarea: React.FC<GuestbookTextAreaProps> = ({ onSubmit }) => {
	const schema = object({
		message: string().required()
	});

	return (
		<Formik initialValues={{ message: "" }} validationSchema={schema} validateOnMount validateOnChange onSubmit={onSubmit}>
			{({ submitForm, isValid, isSubmitting, values, setFieldValue }) => (
				<Form className="flex gap-4 items-center max-sm:flex-col">
					<textarea
						placeholder="Guestbook message here... (markdown allowed, urls disallowed)"
						className="rounded-xl w-80 p-2 max-sm:w-48"
						value={values.message}
						onChange={(ctx) => setFieldValue("message", ctx.currentTarget.value)}
					/>
					<PrimaryButton type="button" className="h-fit rounded-xl" disabled={isSubmitting || !isValid} onClick={submitForm}>
						Submit
					</PrimaryButton>
				</Form>
			)}
		</Formik>
	);
};
