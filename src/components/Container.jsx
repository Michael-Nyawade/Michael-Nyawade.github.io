export default function Container({ children }) {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "0 1.5rem",
      }}
    >
      {children}
    </div>
  );
}