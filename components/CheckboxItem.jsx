export default function CheckboxItem( {id, children, checked, handleCheckbox} ) {
  return (
    <div className='flex justify-between items-center gap-4 my-2'>
      <label for={id} className='flex-1'>
        {children}
      </label>
      <input type="checkbox" id={id} className="h-8 w-8 rounded-full" checked={checked} onChange={handleCheckbox} />
    </div>
  );
}