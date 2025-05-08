export default function Details({ params }: { params: { id: string } }) {
    return (
      <>
        <p>Details {params.id}</p>
      </>
    );
  }
  