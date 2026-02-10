import './EmptyState.css';

function EmptyState (){

  return (
    <div className="empty_state">
      <p>아직 등록된 할 일이 없어요 🙂</p>
      <span>새로운 할 일을 추가해주세요.</span>
    </div>
  );
}

export default EmptyState;