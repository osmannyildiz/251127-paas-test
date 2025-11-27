"use client";

export function ContactForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const response = await fetch("/api/contact-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });
    if (response.ok) {
      const data = await response.json();
      alert(data.message);
    } else {
      const data = await response.json();
      alert(data.error || "Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-[600px] bg-zinc-100 p-4 rounded-xl flex flex-col gap-4"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="bg-white p-2 rounded-md"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="bg-white p-2 rounded-md"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          className="bg-white p-2 rounded-md"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-300"
      >
        Submit
      </button>
    </form>
  );
}
