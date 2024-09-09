export const title = "Vite Single-SPA React Microfrontend";

export const DummyComponent = () => {
  return (
    <div
      style={{
        color: "green",
        marginBottom: 20,
        border: "2px solid green",
        padding: 20,
      }}
    >
      This component is shared between applications and is imported via the root
      config import map.
    </div>
  );
};
