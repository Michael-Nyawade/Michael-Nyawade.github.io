export default function Container({ children }) {
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "1rem",
      }}
    >
      {children}
    </div>
  );
}