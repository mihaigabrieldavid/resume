export type Props = {
  title: string;
};

const SectionTitle = (props: Props) => (
  <div className="text-3xl mt-10">{props.title}</div>
);

export default SectionTitle;
