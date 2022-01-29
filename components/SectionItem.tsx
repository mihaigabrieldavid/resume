export type Props = {
  title?: string;
  subtitle?: string;
  list?: string[];
};

const SectionItem = (props: Props) => (
  <>
    {props.title && <div className="text-lg font-bold mt-4">{props.title}</div>}
    {props.subtitle && <div className="mb-2">{props.subtitle}</div>}
    {props.list && (
      <ul className="list-disc ml-8">
        {props.list.map((val, i) => (
          <li key={i}>{val}</li>
        ))}
      </ul>
    )}
  </>
);

export default SectionItem;
