import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './index.module.css';

interface FormData {
  name: string;
  price: number;
  description?: string;
  isAvailable: boolean;
}

const AddMenuItem: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data); // Print the submitted data to console
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Add Menu Item</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Dish Name</label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Dish name is required' })}
          />
          {errors.name && <span className={styles.error}>{errors.name.message}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="price">Price ($)</label>
          <input
            type="number"
            id="price"
            {...register('price', { required: 'Price is required', min: { value: 0, message: 'Price must be positive' } })}
          />
          {errors.price && <span className={styles.error}>{errors.price.message}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            {...register('description')}
            placeholder="Optional"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="isAvailable">
            <input
              type="checkbox"
              id="isAvailable"
              {...register('isAvailable')}
            />
            Available
          </label>
        </div>

        <button type="submit" className={styles.submitButton}>Add Item</button>
      </form>
    </div>
  );
};

export default AddMenuItem;
