'use client';
import useCanvasCursor from "@/cursors/cursor1";

const CanvasCursor = () => {
  useCanvasCursor();

  return <canvas className='customcursorcanvas' id='canvas' />;
};
export default CanvasCursor;