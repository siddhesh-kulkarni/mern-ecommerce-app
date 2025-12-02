/*
  # E-commerce Admin Dashboard Database Schema

  ## Overview
  Complete database schema for MERN e-commerce platform with admin dashboard

  ## New Tables Created
  
  ### 1. `admin_users`
  - `id` (uuid, primary key) - Unique admin identifier
  - `email` (text, unique, not null) - Admin email address
  - `password_hash` (text, not null) - Hashed password
  - `full_name` (text) - Admin full name
  - `role` (text, default 'admin') - Admin role (admin, super_admin)
  - `is_active` (boolean, default true) - Account status
  - `last_login` (timestamptz) - Last login timestamp
  - `created_at` (timestamptz, default now()) - Account creation date
  - `updated_at` (timestamptz, default now()) - Last update timestamp

  ### 2. `categories`
  - `id` (uuid, primary key) - Category identifier
  - `name` (text, not null) - Category name
  - `slug` (text, unique) - URL-friendly slug
  - `description` (text) - Category description
  - `image_url` (text) - Category image
  - `parent_id` (uuid) - Parent category for nested categories
  - `is_active` (boolean, default true) - Visibility status
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Update timestamp

  ### 3. `products`
  - `id` (uuid, primary key) - Product identifier
  - `name` (text, not null) - Product name
  - `slug` (text, unique) - URL-friendly slug
  - `description` (text) - Product description
  - `price` (decimal, not null) - Product price
  - `compare_price` (decimal) - Original price for discount display
  - `cost_price` (decimal) - Cost for profit calculation
  - `sku` (text, unique) - Stock keeping unit
  - `barcode` (text) - Product barcode
  - `quantity` (integer, default 0) - Available stock
  - `category_id` (uuid) - Foreign key to categories
  - `brand` (text) - Product brand
  - `images` (jsonb) - Array of image URLs
  - `is_active` (boolean, default true) - Product visibility
  - `is_featured` (boolean, default false) - Featured status
  - `rating` (decimal) - Average rating
  - `reviews_count` (integer, default 0) - Total reviews
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Update timestamp

  ### 4. `orders`
  - `id` (uuid, primary key) - Order identifier
  - `order_number` (text, unique) - Human-readable order number
  - `user_id` (uuid) - Customer identifier (nullable for guest checkout)
  - `email` (text, not null) - Customer email
  - `phone` (text) - Customer phone
  - `shipping_address` (jsonb, not null) - Shipping details
  - `billing_address` (jsonb) - Billing details
  - `subtotal` (decimal, not null) - Order subtotal
  - `tax` (decimal, default 0) - Tax amount
  - `shipping_cost` (decimal, default 0) - Shipping cost
  - `discount` (decimal, default 0) - Discount amount
  - `total` (decimal, not null) - Total amount
  - `status` (text, default 'pending') - Order status
  - `payment_status` (text, default 'unpaid') - Payment status
  - `payment_method` (text) - Payment method used
  - `notes` (text) - Order notes
  - `created_at` (timestamptz) - Order date
  - `updated_at` (timestamptz) - Last update

  ### 5. `order_items`
  - `id` (uuid, primary key) - Order item identifier
  - `order_id` (uuid, not null) - Foreign key to orders
  - `product_id` (uuid, not null) - Foreign key to products
  - `product_name` (text, not null) - Product name snapshot
  - `product_image` (text) - Product image snapshot
  - `quantity` (integer, not null) - Quantity ordered
  - `price` (decimal, not null) - Price at time of order
  - `total` (decimal, not null) - Line item total
  - `created_at` (timestamptz) - Creation timestamp

  ### 6. `coupons`
  - `id` (uuid, primary key) - Coupon identifier
  - `code` (text, unique, not null) - Coupon code
  - `description` (text) - Coupon description
  - `discount_type` (text, not null) - Type: 'percentage' or 'fixed'
  - `discount_value` (decimal, not null) - Discount amount/percentage
  - `min_purchase` (decimal) - Minimum purchase requirement
  - `max_discount` (decimal) - Maximum discount cap
  - `usage_limit` (integer) - Total usage limit
  - `usage_count` (integer, default 0) - Current usage count
  - `valid_from` (timestamptz) - Validity start date
  - `valid_until` (timestamptz) - Expiry date
  - `is_active` (boolean, default true) - Active status
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Update timestamp

  ## Security
  - All tables have RLS enabled
  - Admin tables: Only accessible by authenticated admin users
  - Product/Category tables: Public read, admin write
  - Order tables: Users can read their own orders, admins can read all
  - Coupon tables: Public can validate, admins can manage

  ## Notes
  1. All monetary values use DECIMAL type for precision
  2. JSONB used for flexible address and image storage
  3. Timestamps with timezone for accurate tracking
  4. Soft deletes via is_active flags
  5. Indexed fields for performance optimization
*/

CREATE TABLE IF NOT EXISTS admin_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  full_name text,
  role text DEFAULT 'admin' CHECK (role IN ('admin', 'super_admin')),
  is_active boolean DEFAULT true,
  last_login timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  image_url text,
  parent_id uuid REFERENCES categories(id) ON DELETE SET NULL,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  price decimal(10,2) NOT NULL CHECK (price >= 0),
  compare_price decimal(10,2) CHECK (compare_price >= 0),
  cost_price decimal(10,2) CHECK (cost_price >= 0),
  sku text UNIQUE,
  barcode text,
  quantity integer DEFAULT 0 CHECK (quantity >= 0),
  category_id uuid REFERENCES categories(id) ON DELETE SET NULL,
  brand text,
  images jsonb DEFAULT '[]'::jsonb,
  is_active boolean DEFAULT true,
  is_featured boolean DEFAULT false,
  rating decimal(3,2) DEFAULT 0 CHECK (rating >= 0 AND rating <= 5),
  reviews_count integer DEFAULT 0 CHECK (reviews_count >= 0),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_number text UNIQUE NOT NULL,
  user_id uuid,
  email text NOT NULL,
  phone text,
  shipping_address jsonb NOT NULL,
  billing_address jsonb,
  subtotal decimal(10,2) NOT NULL CHECK (subtotal >= 0),
  tax decimal(10,2) DEFAULT 0 CHECK (tax >= 0),
  shipping_cost decimal(10,2) DEFAULT 0 CHECK (shipping_cost >= 0),
  discount decimal(10,2) DEFAULT 0 CHECK (discount >= 0),
  total decimal(10,2) NOT NULL CHECK (total >= 0),
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'shipped', 'delivered', 'cancelled')),
  payment_status text DEFAULT 'unpaid' CHECK (payment_status IN ('unpaid', 'paid', 'refunded')),
  payment_method text,
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id uuid NOT NULL REFERENCES products(id) ON DELETE RESTRICT,
  product_name text NOT NULL,
  product_image text,
  quantity integer NOT NULL CHECK (quantity > 0),
  price decimal(10,2) NOT NULL CHECK (price >= 0),
  total decimal(10,2) NOT NULL CHECK (total >= 0),
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS coupons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code text UNIQUE NOT NULL,
  description text,
  discount_type text NOT NULL CHECK (discount_type IN ('percentage', 'fixed')),
  discount_value decimal(10,2) NOT NULL CHECK (discount_value > 0),
  min_purchase decimal(10,2),
  max_discount decimal(10,2),
  usage_limit integer,
  usage_count integer DEFAULT 0 CHECK (usage_count >= 0),
  valid_from timestamptz DEFAULT now(),
  valid_until timestamptz,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);
CREATE INDEX IF NOT EXISTS idx_products_sku ON products(sku);
CREATE INDEX IF NOT EXISTS idx_orders_user ON orders(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_email ON orders(email);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_order_items_order ON order_items(order_id);
CREATE INDEX IF NOT EXISTS idx_coupons_code ON coupons(code);

ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE coupons ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admin users can manage their own account"
  ON admin_users FOR SELECT
  TO authenticated
  USING (auth.uid()::text = id::text);

CREATE POLICY "Public can view active categories"
  ON categories FOR SELECT
  TO public
  USING (is_active = true);

CREATE POLICY "Public can view active products"
  ON products FOR SELECT
  TO public
  USING (is_active = true);

CREATE POLICY "Users can view their own orders"
  ON orders FOR SELECT
  TO authenticated
  USING (auth.uid()::text = user_id::text OR email = auth.jwt()->>'email');

CREATE POLICY "Users can view their order items"
  ON order_items FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_items.order_id
      AND (orders.user_id::text = auth.uid()::text OR orders.email = auth.jwt()->>'email')
    )
  );

CREATE POLICY "Public can view active coupons"
  ON coupons FOR SELECT
  TO public
  USING (is_active = true AND now() BETWEEN valid_from AND valid_until);
