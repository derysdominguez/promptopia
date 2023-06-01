'use client';


import Form from "@components/Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

const CreatePrompt = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  });

  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/prompts/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });
      if(res.ok) {
        router.push('/');
      }
      // const data = await res.json();
      // if (res.status === 200) {
      //   setPost({
      //     prompt: '',
      //     tag: '',
      //   });
      //   setSubmitting(false);
      //   router.push('/prompts');
      // }
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form 
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  )
}

export default CreatePrompt