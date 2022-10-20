import { ChangeEvent } from "react";
import useForm from "../../hooks/useForm";

export interface IPostFormProps {}

export default function PostForm(props: IPostFormProps) {
  const { title, setTitle, body, setBody, submitHandler } = useForm();

  return (
    <>
      <h1>Form</h1>
      <form>
        <input
          className="form-control text-start"
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
        />
        <textarea
          className="form-control text-start"
          name="body"
          id="body"
          value={body}
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setBody(event.target.value)}
        />
        <button
          type="submit"
          onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => submitHandler(event)}
        >
          Submit
        </button>
      </form>
    </>
  );
}
