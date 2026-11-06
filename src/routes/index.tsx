import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <iframe
      src="/soda.html"
      title="Diet Soda | Pure Zero Refreshment"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        border: "none",
        background: "#14020e",
        colorScheme: "dark",
      }}
    />
  );
}
