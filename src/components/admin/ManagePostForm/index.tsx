"use client";

import { InputText } from "@/components/InputText";
import { useActionState, useState } from "react";
import { MarkDownEditor } from "../MarkDownEditor";
import { ImageUploader } from "../ImageUploader";
import { InputCheckbox } from "@/components/InputCheckbox";
import { makePartialPublicPost, PublicPost } from "@/dto/post/dto";
import { createPostAction } from "@/actions/post/creat-post-action";

type ManagePostFormProps = {
  publicPost?: PublicPost;
};

export function ManagePostForm({ publicPost }: ManagePostFormProps) {
  const initialState = {
    formState: makePartialPublicPost(publicPost),
    errors: [],
  };

  const [state, action, isPending] = useActionState(createPostAction, {});

  const { formState } = state;

  const [contentValue, setContentValue] = useState(publicPost?.content || "");
  return (
    <>
      <form action={action} className='mb-16 '>
        <div className='flex flex-col gap-6'>
          <InputText
            labelText='ID'
            name='id'
            placeholder='ID gerado automaticamente'
            type='text'
            defaultValue={formState.id}
            readOnly
          />

          <InputText
            labelText='Slug'
            name='slug'
            placeholder='Slug gerado automaticamente'
            type='text'
            defaultValue={formState.slug}
            readOnly
          />

          <InputText
            labelText='Título'
            name='title'
            placeholder='Digite o título do Post'
            type='text'
            defaultValue={formState.title}
          />

          <InputText
            labelText='Autor'
            name='author'
            placeholder='Digite o nome do autor do Post'
            type='text'
            defaultValue={formState.author}
          />

          <InputText
            labelText='Excerto'
            name='excerpt'
            placeholder='Digite o Resumo do Post'
            type='text'
            defaultValue={formState.excerpt}
          />

          <MarkDownEditor
            labelText='Conteúdo'
            value={contentValue}
            setValue={setContentValue}
            textAreaName='content'
          />

          <ImageUploader />

          <InputText
            labelText='URL da imagem de capa'
            name='coverImageUrl'
            placeholder='Digite a url da imagem'
            type='text'
            defaultValue={formState.coverImageUrl}
          />

          <InputCheckbox
            labelText='Deseja publicar o post?'
            name='published'
            type='checkbox'
            defaultChecked={formState.published}
          />
        </div>
      </form>
    </>
  );
}
