import Code from '@/components/Code';
import { DocumentationLayout, Layout } from '@/components/Layout';
import PageIndex from '@/components/PageIndex';
import { Article } from '@/components/UI/Article';
import { ReactElement } from 'react';

export default function Introduction() {
  const sections = [
    {
      id: 'introduction',
      name: 'Introduction',
    },
    {
      id: 'features',
      name: 'Features',
    },
    {
      id: 'installation',
      name: 'Installation',
    },
  ];

  return (
    <>
      <Article>
        <h1>PHP Request Validator</h1>
        <section id="introduction">
          <h2>Introduction</h2>
          <p>
            PHP Request Validator is a simple and flexible standalone library for validating HTTP request body for PHP
            applications. It allows you to validate either JSON or form-data bodies specifing its expected fields and
            adding rules for them.
          </p>
          <p>
            It allows you to define which fields are expected in a request body and comes with many predefined rules to
            add for each field, but also suports the creation of your own specific validation rules. PHP Request
            Validator uses the <strong>method chaining</strong> pattern for adding new rules for your fields.
          </p>
        </section>

        <section id="features">
          <h2>Features</h2>

          <ul>
            <li>
              <strong>Field validation: </strong>
              Validate individual fields such as text, number, and boolean input, checking for required values, lengths,
              and valid formats.
            </li>
            <li>
              <strong>Array validation:</strong> Ensure a field is an array and apply rules to be applied for all
              elements inside it.
            </li>
            <li>
              <strong>File validation:</strong> Validate uploaded files, checking for file types and lengths.
            </li>
            <li>
              <strong>Data Type validation:</strong> Specify the data type of each field for type checking in strict or
              non-strict modes.
            </li>
            <li>
              <strong>Custom error messages:</strong> Create and customize your own error messages.
            </li>
            <li>
              <strong>Custom validation rules:</strong> Create specific rules to validate complex data patterns and
              unique application requirements.
            </li>
          </ul>
        </section>

        <section id="installation">
          <h2>Installation</h2>
          <p>Request Validator is on packagist. Install it using composer:</p>
          <Code language="shell">$ composer require enricky/request-validator</Code>
        </section>
      </Article>
      <PageIndex sections={sections} />
    </>
  );
}

Introduction.getLayout = DocumentationLayout;
