'use client';
import { Button, Form, Input } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { useState, useRef, useEffect } from 'react';
import { insertOneCigarette, updateCigarette } from '@/lib/Cigarettes';
import { useRouter } from 'next/navigation';
import { getCigarette } from '@/lib/Cigarettes';
export default function CigaretteForm({ cigId }) {
  const brandRef = useRef();
  const nameRef = useRef();
  const costRef = useRef();
  const quantityRef = useRef();
  const router = useRouter();
  useEffect(() => {
    console.log('useEffect Ran');
    if (cigId != undefined) {
      async function fetchCigarette() {
        const cigarette = await getCigarette(cigId);
        cigarette._id = cigarette._id.toString();
        brandRef.current.input.value = cigarette.brand;
        nameRef.current.input.value = cigarette.name;
        costRef.current.input.value = cigarette.cost;
        quantityRef.current.input.value = cigarette.quantity;
        // todo: call twice console.log(cigarette);
      }
      fetchCigarette();
    }
  }, [cigId]);
  const onFinish = () => {
    let cigarette = {
      brand: brandRef.current.input.value,
      name: nameRef.current.input.value,
      cost: costRef.current.input.value,
      quantity: quantityRef.current.input.value,
    };
    console.log(cigId);
    if (cigId != undefined) {
      cigarette = { ...cigarette, _id: cigId };
      console.log(cigarette);
      updateCigarette(cigarette);
    } else {
      insertOneCigarette(cigarette);
    }
    router.push('/admin');
  };
  return (
    <Form
      name='cigarette-form'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      className='w-1/2'
      initialValues={{ remember: true }}
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete='off'
    >
      <FormItem
        label='品牌'
        name='brand'
        rules={[{ required: true, message: 'Please input your brand!' }]}
      >
        <Input ref={brandRef} />
      </FormItem>
      <FormItem
        label='名称'
        name='name'
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input ref={nameRef} />
      </FormItem>
      <FormItem
        label='进价'
        name='cost'
        rules={[{ required: true, message: 'Please input your cost!' }]}
      >
        <Input ref={costRef} />
      </FormItem>
      <FormItem
        label='数量'
        name='quantity'
        rules={[{ required: true, message: 'Please input your quantity!' }]}
      >
        <Input ref={quantityRef} />
      </FormItem>
      <FormItem wrapperCol={{ offset: 8, span: 16 }}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </FormItem>
    </Form>
  );
}
