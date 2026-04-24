import { Button } from "../../uikit/button";
import { UiModal } from "../../uikit/modal";

export function GameOverModal({ winnerName, players }) {
  return (
    <UiModal
      isOpen={winnerName}
      onClose={() => {
        console.log("Close modal");
      }}
    >
      <UiModal.Header className="text-2xl">Игра завершена</UiModal.Header>
      <UiModal.Body>
        <div>
          <span className="text-sm">Победитель:</span>{" "}
          <span className="text-teal-600">{winnerName}</span>
        </div>
        <div className="mt-4 bg-white  rounded-2xl px-4 py-4 flex  flex-wrap gap-8 shadow-md ">
          {players}
        </div>
      </UiModal.Body>
      <UiModal.Footer>
        <Button size="md" type="outlined">
          Вернуться
        </Button>
        <Button className="">Играть снова</Button>
      </UiModal.Footer>
    </UiModal>
  );
}
