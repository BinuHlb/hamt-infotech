import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactElement;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  onClick,
  disabled = false,
  type = 'button',
}) => {
  const baseClasses = clsx(
    'inline-flex h-full items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2',
    {
      'bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500 dark:bg-primary-500 dark:hover:bg-primary-600': variant === 'primary',
      'bg-secondary-600 hover:bg-secondary-700 text-white focus:ring-secondary-500 dark:bg-secondary-500 dark:hover:bg-secondary-600': variant === 'secondary',
      'bg-gray-900 hover:bg-gray-800 text-white focus:ring-accent-500 dark:bg-accent-500 dark:hover:bg-accent-600': variant === 'accent',
      'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-gray-800': variant === 'outline',
      'text-primary-600 hover:bg-primary-50 dark:text-primary-400 dark:hover:bg-gray-800': variant === 'ghost',
      'px-3 py-1.5 text-sm': size === 'sm',
      'px-5 py-2.5 text-base': size === 'md',
      'px-7 py-3.5 text-lg': size === 'lg',
      'w-full': fullWidth,
      'opacity-60 cursor-not-allowed': disabled,
    },
    className
  );

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </>
  );

  const motionProps = {
    whileHover: { scale: disabled ? 1 : 1.03 },
    whileTap: { scale: disabled ? 1 : 0.98 },
    transition: { duration: 0.2 },
  };

  if (to) {
    return (
      <motion.div {...motionProps}>
        <Link to={to} className={baseClasses}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div {...motionProps}>
        <a href={href} className={baseClasses} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {content}
    </motion.button>
  );
};

export default Button;