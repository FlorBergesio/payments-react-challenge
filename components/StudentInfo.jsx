export default function StudentInfo( {student_info, total} ) {
  return (
    <>
      <div className="flex justify-between gap-4">
        <h2>{student_info.first_name} {student_info.last_name}</h2>
        <span>{student_info.cohort}</span>
      </div>
      <div className="flex justify-between gap-4 text-lg mt-2">
        <h3>Total a pagar</h3>
        <span>$ {total > 0 ? total : "---"}</span>
      </div>
    </>
  );
}