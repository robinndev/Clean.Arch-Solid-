function calcTotalOrder(unitPrice: number, quantity: number) {
  return unitPrice * quantity;
}

const totalOrder = calcTotalOrder(100, 2);

function calcTotal({
  unitPrice,
  quantity,
}: {
  unitPrice: number;
  quantity: number;
}) {
  return unitPrice * quantity;
}

const total = calcTotal({ unitPrice: 100, quantity: 2 });

// Quando não fica explícito qual ou quais os parametros passar, por meio do nome,

const orderDTO: {
  unitPrice: number;
  quantity: number;
} = {
  unitPrice: 100,
  quantity: 2,
};

const totalFromDTO = calcTotal(orderDTO);

// _________

// Quando o próprio nome já deixa claro o que é, não há necessidade de usar um prefixo como "dto" ou "dataTransferObject".

// Examples:

// repository.findById("123")
// repository.findById(id)
// repository.findById(order.id)
