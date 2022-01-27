SELECT
    c.year,
    c.month,
    c.customer_id
   # s.total_quantity * s.total_unit_price AS 'total_monthly_order_value'
FROM
    (
    SELECT
        YEAR(o.ordered_at) AS 'year',
        MONTH(o.ordered_at) AS 'month',
        customers.customer_id,
        o.order_id
    FROM
        customers
    INNER JOIN orders AS o
    ON
        o.customer_id = customers.customer_id
) c
GROUP BY
    MONTH,
    c.customer_id;