import React from "react";
import { SlideFade } from "../Animations";
import { Formik, Form, FormikConfig } from "formik";
import { CONTACT_FORM_FIELDS } from "@website/constants";
import { Inter } from "next/font/google";
import { PrimaryButton } from "@website/buttons";
import { object, string } from "yup";

const inter = Inter({ subsets: ["latin"], display: "swap", weight: ["800", "600"] });

interface FieldProps<V extends string | number> {
	id: string;
	name: string;
	placeholder: string;

	type: "textarea" | "input";
	error?: string;

	value: V;
	onChange: (value: V) => void;
}

const ContactFormField = <V extends string | number>({ value, name, placeholder, id, onChange, error, type }: FieldProps<V>) => {
	const onChangeHandler = (ctx: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const formValue = (typeof value === "string" ? ctx.currentTarget.value : Number(ctx.currentTarget.value)) as V;
		onChange(formValue);
	};

	return (
		<div className="flex flex-col">
			<label htmlFor={id} className="text-6" style={inter.style}>
				{name}
			</label>
			{type === "textarea" && (
				<textarea
					style={{ resize: "vertical" }}
					className="rounded-lg p-2 bg-zinc-100 dark:bg-black"
					id={id}
					placeholder={placeholder}
					value={value}
					onChange={onChangeHandler}
				/>
			)}
			{type === "input" && (
				<input
					className="rounded-lg p-2 bg-zinc-100 dark:bg-black"
					id={id}
					placeholder={placeholder}
					value={value}
					onChange={onChangeHandler}
				/>
			)}
			<p aria-errormessage={error} role="alert" className="text-red-500">
				{error ? `* ${error}` : <>&#8203;</>}
			</p>
		</div>
	);
};

interface FieldValues {
	name: string;
	email: string;
	message: string;
}

export interface ContactFormProps {
	onSubmit: FormikConfig<{ name: string; email: string; message: string }>["onSubmit"];
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
	const fieldKeys = CONTACT_FORM_FIELDS.map((field) => field.id);

	const validationSchema = object({
		name: string().required("Your name is required"),
		email: string().required("A valid email is required").email("A valid email is required"),
		message: string().required("A message is required")
	});

	return (
		<SlideFade>
			<Formik
				validationSchema={validationSchema}
				validateOnChange
				initialValues={
					fieldKeys
						.map((key) => ({ [key]: CONTACT_FORM_FIELDS.find((field) => field.id === key)!.value }))
						.reduce((a, b) => ({ ...a, ...b }), {}) as unknown as FieldValues
				}
				onSubmit={onSubmit}
			>
				{({ values, errors, setFieldValue, submitForm, isValid, isSubmitting }) => (
					<Form className="dark:bg-background-alt bg-zinc-300 px-6 py-4 rounded-xl flex flex-col gap-y-4">
						{fieldKeys.map((fieldId, key) => {
							const field = CONTACT_FORM_FIELDS.find((field) => field.id === fieldId)!;
							const error = errors[fieldId as keyof FieldValues];
							const value = values[fieldId as keyof FieldValues];

							return (
								<ContactFormField
									key={key}
									{...field}
									type={field.type as "textarea" | "input"}
									error={error}
									value={value}
									onChange={(v) => setFieldValue(fieldId, v)}
								/>
							);
						})}
						<PrimaryButton className="!rounded-xl" type="button" onClick={submitForm} disabled={!isValid || isSubmitting}>
							Submit
						</PrimaryButton>
					</Form>
				)}
			</Formik>
		</SlideFade>
	);
};
