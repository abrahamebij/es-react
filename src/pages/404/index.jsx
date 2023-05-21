function NotFound() {
  return (
    <div
      className="text-5xl tracking-widest text-center mt-8 mb-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ translateX: '40px', opacity: 0 }}
    >
      404
    </div>
  );
}
export default NotFound;
