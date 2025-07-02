import { Loader2 } from 'lucide-react';
import { useState, ChangeEvent, FormEvent } from 'react';
import {
  RequestStatus,
  RequestStatusBadge,
} from '../../badges/request-status-badge/request-status-badge';
import { PrimaryButton } from '../../buttons/primary-button';

interface SplitLoginProps {}

const SignUpFields = [
  {
    internalName: 'first_name',
    name: 'Name',
    type: 'text',
  },
  {
    internalName: 'user_name',
    name: 'Username',
    type: 'text',
  },
  {
    internalName: 'password',
    name: 'Password',
    type: 'password',
  },
];

const SignUpInitState = {
  first_name: '',
  user_name: '',
  password: '',
};

const SignInFields = [
  {
    internalName: 'user_name',
    name: 'Username',
    type: 'text',
  },
  {
    internalName: 'password',
    name: 'Password',
    type: 'password',
  },
];

const SignInInitState = {
  user_name: '',
  password: '',
};

export function SplitLogin({}: SplitLoginProps) {
  const [activeSide, setActiveSide] = useState(true);

  return (
    <div className="rounded-lg relative overflow-hidden shadow-md hover:shadow-lg transition w-fit">
      <div
        className={
          'absolute flex text-white transition-all bg-gradient-to-bl from-[#e74141] to-[#f50a8b]'
        }
        style={{
          clipPath: activeSide
            ? 'polygon(0 0, 0 100%, 50% 100%, 50% 0)'
            : 'polygon(50% 0, 50% 100%, 100% 100%, 100% 0)',
        }}
      >
        <Cover
          body="To keep connected with us please login with your personal info."
          ctaCallbackFn={() => setActiveSide(!activeSide)}
          ctaText="i'm new here"
          title="Welcome Back!"
        />
        <Cover
          body="Enter your personal details and start your journey with us."
          ctaCallbackFn={() => setActiveSide(!activeSide)}
          ctaText="i've been here before"
          title="Hello, Friend!"
        />
      </div>
      <div className="flex">
        <Form
          title="Create Account"
          ctaText="sign up"
          inputs={SignUpFields}
          initState={SignUpInitState}
        />
        <Form title="Sign in" ctaText="sign in" inputs={SignInFields} initState={SignInInitState} />
      </div>
    </div>
  );
}

type FormProps = {
  title: string;
  inputs: {
    name: string;
    internalName: string;
    type: string;
  }[];
  ctaCallbackFn?: (obj: any) => Promise<void>;
  ctaText: string;
  initState: Record<string, string>;
};

function Form(props: FormProps) {
  const { title, inputs, initState, ctaCallbackFn, ctaText } = props;
  const [formState, setFormState] = useState(initState);
  const [formResult, setFormResult] = useState<RequestStatus>(RequestStatus.none);

  async function handleSubmit() {
    setFormResult(RequestStatus.none);
    try {
      setFormResult(RequestStatus.processing);
      if (ctaCallbackFn) await ctaCallbackFn(formState);
      setFormState(initState);
      setFormResult(RequestStatus.success);
    } catch (e) {
      setFormResult(RequestStatus.error);
    }
  }

  function handleEditField(e: ChangeEvent<HTMLInputElement>) {
    setFormResult(RequestStatus.none);

    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <form
      className="w-[450px] h-[400px] p-10 flex flex-col gap-2 justify-between bg-gradient-to-tr from-gray-900 to-slate-700"
      onSubmit={(e: FormEvent) => e.preventDefault()}
    >
      <h2 className="text-2xl font-bold">{title}</h2>

      <div className="flex flex-col gap-2">
        {inputs.map((inputElem) => (
          <input
            key={inputElem.name}
            onChange={handleEditField}
            name={inputElem.internalName}
            value={formState[inputElem.internalName]}
            placeholder={inputElem.name}
            type={inputElem.type}
            className="border border-black/10 px-3 py-2 rounded-lg outline-none transition focus:border-black/60"
          />
        ))}
      </div>

      <RequestStatusBadge currentStatus={formResult} />

      <PrimaryButton
        onClick={handleSubmit}
        className="uppercase w-60 mx-auto"
        disabled={formResult === RequestStatus.processing}
      >
        {formResult === RequestStatus.processing ? (
          <Loader2 className="mx-auto animate-spin" />
        ) : (
          <span>{ctaText}</span>
        )}
      </PrimaryButton>
    </form>
  );
}

type CoverProps = {
  title: string;
  body: string;
  ctaText: string;
  ctaCallbackFn: () => void;
};

function Cover(props: CoverProps) {
  const { body, ctaCallbackFn, ctaText, title } = props;

  return (
    <div className="w-[450px] h-[400px] p-10 flex flex-col justify-between">
      <h2 className="text-2xl font-bold">{title}</h2>

      <span>{body}</span>

      <button
        className="py-1 transition w-60 rounded-2xl uppercase bg-transparent outline outline-2 outline-white mx-auto hover:bg-white/20 active:bg-black/10"
        onClick={ctaCallbackFn}
      >
        {ctaText}
      </button>
    </div>
  );
}
