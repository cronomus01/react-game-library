interface Props {
  onClick: () => void;
}
const BackToTop = ({ onClick }: Props) => {
  return (
    <div className="fixed right-2 bottom-2 bg-slate-900 text-white px-3 py-1 rounded-full">
      <button onClick={onClick}>Scroll Up</button>
    </div>
  );
};

export default BackToTop;
