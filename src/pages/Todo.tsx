import Container from "@/components/container"
import TodoContainer from "./todoContainer"


export const Todo = () => {
    return (
        <Container>
            <h2 className="text-4xl font-semibold pt-5">My Todos</h2>
            <TodoContainer />
        </Container>
    )
}