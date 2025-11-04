export default function Header({ text }: { text?: React.ReactNode }) {
  return (
    <div className="w-full">
      <hr className="border-white" />
      <p className="py-4 text-lg font-light text-center">
        {text}
      </p>
      <hr className="border-white" />
    </div>
  );
}
