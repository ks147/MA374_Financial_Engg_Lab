clear all;
clc;

S0 = 100;
K = 100;
T = 1;
r = 0.08;
sigma = 0.2;
M_values = [1, 5, 10 ,20, 50, 100, 200, 400];

tic
calculate_price(M_values, S0, K, T, r, sigma);
toc

function [] = calculate_price(M_values, S0, K, T, r, sigma)
    fprintf('Value of M \t Intial European call price\n');
    for M = M_values
       del_t = T/M;
       u = exp(sigma*sqrt(del_t) + (r - ((sigma)^2)/2)*del_t);
       d = exp(-sigma*sqrt(del_t) + (r - ((sigma)^2)/2)*del_t);
       risk_nt_p = (exp(r*del_t) - d)/(u - d);
       if ~(d <= exp(r*(del_t)) && exp(r*(del_t)) <= u)
               fprintf('Arbitrage!\n')
       else
           for i = 1:M+1
               temp(i) = S0*(u^(M+1-i)*(d^(i-1)));
               temp(i) = max(0, temp(i) -K);
           end
           for i = 1:M
               for j = 1:M+1-i
                   temp(j) = exp(-r*del_t)*(risk_nt_p*temp(j) + (1 - risk_nt_p)*temp(j+1));
               end
           end
           fprintf('%d \t\t %0.3f\n', M, temp(1));
       end
    end
end