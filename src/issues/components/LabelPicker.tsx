import useLabel from '../hooks/useLabel';
import { Label } from '../interfaces/Label';

export const LabelPicker = () => {
  const { isLoading, data: labels } = useLabel();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {labels?.map((label: Label) => (
        <span
          key={label.id}
          className='badge rounded-pill m-1 label-picker'
          style={{
            border: `1px solid #${label.color}`,
            color: `#${label.color}`,
          }}
        >
          {label.name}
        </span>
      ))}
    </div>
  );
};
