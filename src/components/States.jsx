import './States.css';

function States ({total, completed}){
  return (
    <div className="todo_status">
      <span id="totalCount">{total}</span>개 중 <span id="doneCount">{completed}</span>완료
    </div>
  );
}

export default States;