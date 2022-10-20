import { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { createPostAsync } from "../store/reducers/posts";

export interface IFormData {
  post: {
    title: string;
    body: string;
  };
}

const useForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useAppDispatch();

  const submitHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const formData: IFormData = {
      post: {
        title,
        body,
      },
    };
    dispatch(createPostAsync(formData));
    resetState();
  };

  const resetState = () => {
    setTitle("");
    setBody("");
  };

  return { title, setTitle, body, setBody, submitHandler };
};

export default useForm;
