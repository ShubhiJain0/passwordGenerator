import React from 'react'
import usePasswordStore from './useStore'

const PasswordGenerator = () => {
  const {length , setLength , includeNumbers , toggleNumbers , includeSymbols , toggleSymbols, includeUpperCase , toggleUpperCase, toggleLowerCase, includeLowerCase , generatedPassword , generatePassword} = usePasswordStore();
  const handleGeneratePassword= ()=>{
    generatePassword();
  }
  return (
    <div className="w-[30rem] h-[30rem] bg-white rounded-3xl text-black  flex flex-col items-center">
      <h1 className="text-3xl font-semibold py-4 px-4 ">Password generator</h1>
      <div className="flex flex-col gap-4 w-full justify-around">
        <label className="text-xl px-2" htmlFor="">
          password length
        </label>
        <input
          className="py-2 px-4 rounded-lg shadow-lg outline-1 "
          value={length}
          onChange={(e) => setLength(+e.target.value)}
          type="number"
          name=""
          id=""
        />
      </div>

      <div className="flex flex-col">
        <div>
          <input type="checkbox" name="" id="" 
          onChange={toggleNumbers}
          className="" 
          checked={includeNumbers}/>
          <label htmlFor=" text-sm">Include numbers</label>
        </div>
        <div>
          <input type="checkbox" name="" id="" onChange={toggleUpperCase} 
          checked={includeUpperCase} />

          <label htmlFor=" text-sm">Include Uppercase</label>
        </div>
        <div>
          <input type="checkbox" name="" id="" onChange={toggleLowerCase}
          checked={includeLowerCase}
          />
          <label htmlFor=" text-sm ">Include Lowercase</label>
        </div>
        <div>
          <input type="checkbox" name="" id=""
          onChange={toggleSymbols} 
          checked={includeSymbols}/>
          <label htmlFor=" text-sm ">Include Symbols</label>
        </div>

      </div>
      <button className="py-2 px-4 bg-blue-500 text-white rounded-lg  shadow-lg"
      onClick={handleGeneratePassword}
      >Generate password</button>
      <div>
        {
          generatedPassword && <h1 className='text-3xl font-bold m-2 bg-gray-300 py-2 px-4'>{generatedPassword}</h1>
        }
      </div>
    </div>
  );
}

export default PasswordGenerator