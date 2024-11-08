export default function Footer() {
  return (
    <div className="flex flex-col mb-8 sm:px-8">
      <hr className="mb-4" style={{borderColor: "#333333"}}></hr>
      <div className="flex flex-col px-5 sm:px-10 justify-center" style={{color: "#555555"}}>
        <span style={{fontSize: "clamp(0.8rem, 3vw, 1rem"}}>{`"A heart for change, a mind for innovation—transforming ideas into action."`}</span>
      </div>
    </div>
  );
}
