// StepNavigator.js
import React, { useState } from 'react'
//图标
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
//动画
import { CSSTransition, TransitionGroup } from 'react-transition-group';  // 导入所需的组件
import './other.css';

const StepNavigator = ({ steps }) => {
  // 从 props 接收 steps 数组
  const [currentStep, setCurrentStep] = useState(1)
  const handleStepClick = (stepIndex) => {
    setCurrentStep(stepIndex + 1) // 更新 currentStep 为被点击的 step 的索引 + 1（因为 stepIndex 是从 0 开始的）
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-green-50">
        <div className="fixed left-4 top-1/4">
          <button
            onClick={() => setCurrentStep(currentStep - 1)}
            className={`bg-green-500 text-white p-2 rounded-lg border border-solid border-green-500 shadow transition ease-in duration-150 ${
              currentStep === 1 ? 'bg-gray-500-important border-gray-500-important' : 'hover:bg-green-700 focus:outline-none'
            } `}
            disabled={currentStep === 1}
          >
            <FontAwesomeIcon icon={faArrowLeft} /> {/* 替换为左箭头图标 */}
          </button>
        </div>
        <div className="flex flex-col items-center">
          <TransitionGroup className="mb-4">
            <CSSTransition key={currentStep} classNames="fade" timeout={300}>
              <div>
                {steps[currentStep - 1]}{' '}
                {/* 根据 currentStep 渲染相应的步骤组件 */}
              </div>
            </CSSTransition>
          </TransitionGroup>
          <div className="flex mb-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`p-4 mx-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 ${
                    index < currentStep ? 'bg-green-500 text-white' : 'bg-gray-300 text-black'
                  } rounded-lg`}
                onClick={() => handleStepClick(index)} // 添加 onClick 事件处理器
              >
                {`step-${index + 1}`}
              </div>
            ))}
          </div>
        </div>
        <div className="fixed right-4 top-1/4">
          <button
            onClick={() => setCurrentStep(currentStep + 1)}
            className={`bg-green-500 text-white p-2 rounded-lg border border-solid border-green-500 shadow transition ease-in duration-150 ${
              currentStep === steps.length ? 'bg-gray-500-important border-gray-500-important' : 'hover:bg-green-700 focus:outline-none'
            } `}
            disabled={currentStep === steps.length}
          >
            <FontAwesomeIcon icon={faArrowRight} /> {/* 替换为右箭头图标 */}
          </button>
        </div>
      </div>
    </>
  )
}

export default StepNavigator
