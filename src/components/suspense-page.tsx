import { FC, LazyExoticComponent, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

type Props = {
  Page: LazyExoticComponent<FC<unknown>>;
  fallback?: JSX.Element;
};
const SuspensePage: FC<Props> = ({ Page, fallback }) => {
  return (
    <Suspense fallback={fallback ? fallback : <p>Loading...</p>}>
      <ErrorBoundary fallback={<p>error</p>}>
        <Page />
      </ErrorBoundary>
    </Suspense>
  );
};

export default SuspensePage;
