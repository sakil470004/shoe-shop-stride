const Accordian = () => {
  const faqArray = [
    {
      id: 1,
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship worldwide. Shipping costs will be added at checkout.",
    },
    {
      id: 2,
      question: "What is the delivery time for orders?",
      answer:
        "UK orders are delivered within 3-5 working days. International delivery times may vary.",
    },
    {
      id: 3,
      question: "Can I return my product?",
      answer:
        "Yes, you can return your order within 45 days. Use the returns form provided.",
    },
    {
      id: 4,
      question: "Do you allow exchanges?",
      answer:
        "Unfortunately, we do not offer exchanges. Please return the item for a refund and place a new order.",
    },
    {
      id: 5,
      question: "Can I return items to a physical store?",
      answer:
        "Yes, you can return items to any Pavers store within 45 days of receiving them.",
    },
  ];
  return (
    <div className="my-20 px-8 w-3/4 mx-auto flex flex-col gap-5">
      {faqArray.map((faq) => (
        <div className="collapse collapse-arrow bg-gray-200" key={faq.id}>
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            {faq.question}
          </div>
          <div className="collapse-content">
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordian;
