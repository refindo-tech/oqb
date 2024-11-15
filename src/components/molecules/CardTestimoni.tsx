const CardTestimoni = () => {
  return (
    <div className="flex flex-row gap-3">
      <div className="bg-biru w-12 h-12 rounded-lg"></div>
      <div className="bg-gray-100 shadow-lg w-full min-h-20 rounded-lg p-4">
        <div className="flex flex-col justify-between gap-3">
          <div>
            <p>Rating</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur id velit nesciunt, sint incidunt vitae aut
              praesentium, facilis eligendi similique atque. Vitae natus soluta
              sequi aut eum, id fugit officiis!
            </p>
          </div>
          <div className="font-semibold text-lg">Clients Name</div>
        </div>
      </div>
    </div>
  );
};
export default CardTestimoni;
