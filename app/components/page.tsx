"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Stepper } from "@/components/layout/Stepper";
import { Modal } from "@/components/ui/Modal";

export default function ComponentShowcase() {
  return (
    <main className="min-h-screen bg-background p-10 text-text">
      <h1 className="text-3xl font-bold">aibazzar — Component Library</h1>
      <p className="mt-1 text-muted">Phase 1 design system showcase</p>

      <Section title="Colors">
        <div className="flex flex-wrap gap-6">
          {[
            ["primary", "bg-primary"],
            ["accent", "bg-accent"],
            ["surface", "bg-surface border border-slate-200"],
            ["success", "bg-success"],
            ["warning", "bg-warning"],
            ["danger", "bg-danger"],
            ["text", "bg-text"],
          ].map(([name, cls]) => (
            <div key={name} className="flex flex-col items-center gap-2">
              <div className={`h-16 w-16 rounded-md ${cls}`} />
              <span className="text-xs text-muted">{name}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Buttons">
        <div className="flex flex-wrap items-center gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
        </div>
        <div className="mt-3 flex items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </Section>

      <Section title="Form controls">
        <div className="grid max-w-md gap-4">
          <Input placeholder="you@example.com" />
          <Input placeholder="Error state" error />
          <Textarea placeholder="About you..." rows={3} />
          <Select>
            <option>AI Agents</option>
            <option>Chatbots</option>
            <option>Image Tools</option>
          </Select>
          <Checkbox label="I agree to the terms" />
        </div>
      </Section>

      <Section title="Card / Badge / Avatar">
        <div className="flex flex-wrap items-start gap-4">
          <Card className="w-64">
            <div className="flex items-center gap-3">
              <Avatar name="Rajesh Kumar" />
              <div>
                <p className="font-medium">Rajesh Kumar</p>
                <p className="text-sm text-muted">Seller</p>
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              <Badge variant="success">Active</Badge>
              <Badge variant="warning">Pending</Badge>
            </div>
          </Card>
          <div className="flex flex-col gap-2">
            <Badge>Default</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
            <Badge variant="info">Info</Badge>
          </div>
        </div>
      </Section>

      <Section title="Layout & overlays">
        <div className="max-w-md space-y-6">
          <Stepper current={2} total={4} />
          <ModalDemo />
        </div>
      </Section>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="mb-4 text-lg font-semibold">{title}</h2>
      {children}
    </section>
  );
}

function ModalDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal open={open} onClose={() => setOpen(false)} title="Example modal">
        <p className="text-sm text-muted">
          This is a reusable modal dialog. Press Escape or click outside to close.
        </p>
      </Modal>
    </>
  );
}