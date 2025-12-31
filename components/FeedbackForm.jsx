import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import FeedbackForm from "./FeedbackForm";


export default function FeedbackForm() {
  const [form, setForm] = useState({ name: "", email: "", feedback: "" });
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(form);
    setForm({ name: "", email: "", feedback: "" });
  };

  return (
    <div className="space-y-4">
      <Card className="p-4">
        <form onSubmit={handleSubmit} className="space-y-2">
          <Input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
          <Input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <Textarea
            name="feedback"
            placeholder="Feedback"
            value={form.feedback}
            onChange={handleChange}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Card>

      {submitted && (
        <Card className="p-4">
          <p><strong>Name:</strong> {submitted.name}</p>
          <p><strong>Email:</strong> {submitted.email}</p>
          <p><strong>Feedback:</strong> {submitted.feedback}</p>
        </Card>
      )}
    </div>
  );
}
