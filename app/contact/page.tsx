import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="text-center pt-12">
      <h1 className="text-4xl font-semibold">Contact</h1>
      <p className="text-2xl font-medium mt-4 mb-8">
        If you have any questions or feedback, please feel free to contact us.
      </p>
      <ContactForm />
    </div>
  );
}
