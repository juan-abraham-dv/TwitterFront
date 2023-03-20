import LeftPartial from "./LeftPartial";

export default function NotFound404() {
  return (
    <>
      <div className="row gx-5">
        <LeftPartial />
        <div className="col-9 p-0">
          <div className="d-flex justify-content-center mt-5">
            <h4 className="text-secondary fw-normal fs-6 mt-5">
              Hmm...this page doesn’t exist. Try searching for something else.
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
