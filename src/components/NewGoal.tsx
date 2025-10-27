import { useRef, type FormEvent } from "react"

interface NewGoalProps {
    onAddGoal: (text: string, summary:string) => void;
}

export default function NewGoal({onAddGoal}: NewGoalProps){
    const goalRef = useRef<HTMLInputElement>(null);
    const summaryRef = useRef<HTMLInputElement>(null);

    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        const enteredGoal = goalRef.current!.value;
        const enteredSummary = summaryRef.current!.value;

        onAddGoal(enteredGoal, enteredSummary);

    }

    return <form onSubmit={handleSubmit} action="">
        <p>
            <label htmlFor="goal">Your goal</label>
            <input id="goal" type="text" ref={goalRef} />
        </p>

        <p>
            <label htmlFor="summary">Short summary</label>
            <input id="summary" type="text" ref={summaryRef} />
        </p>

        <p>
            <button type="submit">Add Goal</button>
        </p>
    </form>
}