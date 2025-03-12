// https://code-basics.com/ru/languages/typescript/lessons/enums

enum ModalStatus {
    Opened = '0',
    Closed = '1',
}
  
function buildModal(text: string, status: ModalStatus): { text: string; status: ModalStatus } {
    return {
      text: text,
      status: status
    }
}
  