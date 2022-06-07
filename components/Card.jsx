export default function Card( props ) {
  return (
    <div className="w-full bg-white p-4 mb-2 rounded-sm">
      {props.children}
    </div>
  );
}