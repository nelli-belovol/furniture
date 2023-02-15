import { Field, Form, Formik } from 'formik';
import { images } from '../../../assets/images';
import { validationSchemaSubscribe } from '../../../utils/validationSchema';

import styled from './Info.module.scss';

const information = [
  'About Us',
  'Careers',
  'Sell on shopee',
  'Press & News',
  'Competitions',
  'Terms & Conditions',
];

const Info = () => {
  const handleSubmit = (value: { email: string }) => {
    console.log(value);
  };
  return (
    <section className={styled.infoSection}>
      <div className="container">
        <div className={styled.gridContainer}>
          <article>
            <img src={images.designTogether} alt="footerLogo" />
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
            </p>
          </article>
          <article>
            <h3>LET US HELP YOU</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
            </p>
          </article>
          <article>
            <h3>INFORMATION</h3>
            <ul>
              {information.map((info, idx) => (
                <li key={idx}>
                  <a href="#">{info}</a>
                </li>
              ))}
            </ul>
          </article>
          <article>
            <h3>OUR DESIGN</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
            </p>
          </article>
        </div>
        <Formik
          initialValues={{ email: '' }}
          validationSchema={validationSchemaSubscribe}
          onSubmit={(values: { email: string }, { resetForm }: any) => {
            handleSubmit(values);
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className={styled.formWrap}>
                {errors.email && touched.email ? (
                  <div className={styled.error}>{errors.email}</div>
                ) : (
                  <></>
                )}
                <Field
                  className={styled.input}
                  id="emailInfo"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>

              <button type="submit" className={styled.buttonSubmit}>
                Subscribe
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export  {Info};
