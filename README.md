1. 실행방법
   npm run dev

2. 컴포넌트 구조
   App
   ├─ Header
   ├─ TodoForm (input + submit)
   ├─ TodoList
   │ ├─ TodoItem (반복 렌더링)
   │ └─ EmptyState (할 일이 없을 때)
   └─ Stats (완료: n/m)

3. 상태(State) 설명
   Header
   - Props 없음
   - State: 없음

   EmptyState
   - Props 없음
   - State: 없음

   TodoForm
   - Props
     - addTodo: (text: string) => void
   - State
     - text: string (현재 인풋 값 = value)

   TodoList
   - Props
     - todos: { id: number; text: string; completed: boolean }[] (할 일 목록)
     - deleteTodo: (id: number) => void (삭제 콜백)
     - toggleTodo: (id: number) => void (토글 콜백)
   - State 없음

   TodoItem
   - Props
     - todos: { id: number; text: string; completed: boolean } (할 일 목록)
     - deleteTodo: (id: number) => void (삭제 콜백)
     - toggleTodo: (id: number) => void (토글 콜백)
   - State 없음

   States
   - Props
     - total : number 전체 개수
     - completed : number 완료 개수
   - State 없음

4. 불변성 업데이트
   const addTodo = (text) => {
   const newTodo = { id: Date.now(), text, completed: false };
   setTodos(prev => [...prev, newTodo]); //기존 배열을 변경하지 않고, 새 배열을 만들어 추가했다.
   };
