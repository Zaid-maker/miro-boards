import { Canvas } from "./_components/canvas";

interface BoardIdPage {
  params: {
    boardId: string;
  };
}

const BoardIdPage = ({ params }: BoardIdPage) => {
  return <Canvas boardId={params.boardId} />;
};

export default BoardIdPage;
